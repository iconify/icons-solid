import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w79lowova {
  fill: currentColor;
  d: path("M20.3 20.3q-.3.3-.712.3t-.713-.3L3.7 5.125q-.3-.3-.3-.712t.3-.713t.712-.3t.713.3L20.3 18.875q.3.3.3.713t-.3.712m-10 0q-.3.3-.712.3t-.713-.3L3.7 15.125q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l5.175 5.175q.3.3.3.713t-.3.712");
}
</style><path class="w79lowova"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:resize-window-outline-rounded"} {...others} />);
}

export default Component;
