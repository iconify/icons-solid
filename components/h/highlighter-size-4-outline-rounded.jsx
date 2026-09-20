import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gzzo5qcsk {
  fill: currentColor;
  d: path("m8.825 20.825l-5.65-5.65q-.3-.3-.3-.712t.3-.713L13.75 3.175q.3-.3.713-.3t.687.3l5.675 5.65q.3.3.3.713t-.3.712L10.25 20.825q-.3.3-.712.3t-.713-.3");
}
</style><path class="gzzo5qcsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:highlighter-size-4-outline-rounded"} {...others} />);
}

export default Component;
