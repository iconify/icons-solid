import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9rf4pbkn {
  fill: currentColor;
  d: path("m14 20l-.713-.713l3.792-3.787H6V5h1v9.5h10.079l-3.792-3.792l.707-.714L19 15z");
}
</style><path class="b9rf4pbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subdirectory-arrow-right-outline-sharp"} {...others} />);
}

export default Component;
