import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8mbkua-z {
  fill: currentColor;
  d: path("M6 16h12V8H6zm-4 4V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="z8mbkua-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:capture-outline-sharp"} {...others} />);
}

export default Component;
