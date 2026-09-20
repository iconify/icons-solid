import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ftkanbtsf {
  fill: currentColor;
  d: path("M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M32 60h192a4 4 0 0 1 4 4v28H28V64a4 4 0 0 1 4-4m192 136H32a4 4 0 0 1-4-4v-92h200v92a4 4 0 0 1-4 4m-20-28a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-64 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4");
}
</style><path class="ftkanbtsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:credit-card-thin"} {...others} />);
}

export default Component;
