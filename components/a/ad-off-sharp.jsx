import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfsi9rbrb {
  fill: currentColor;
  d: path("m19.41 20.83l-.831-.83H4V5.421l-.83-.836l.707-.708l16.246 16.246zM5 19h12.579L5 6.421zm15-1.825l-1-1V8.154h-8.021L6.825 4H20z");
}
</style><path class="zfsi9rbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ad-off-sharp"} {...others} />);
}

export default Component;
