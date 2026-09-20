import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhne4ccit {
  fill: currentColor;
  d: path("M5.5 18.5v-9h1v7.292l12.1-12.1l.708.708l-12.1 12.1H14.5v1z");
}
</style><path class="lhne4ccit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:south-west"} {...others} />);
}

export default Component;
