import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.swzxqewsw {
  fill: currentColor;
  d: path("m224.49 88.49l-48 48a12 12 0 0 1-17-17L187 92H84v132a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h115l-27.49-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1-.02 17");
}
</style><path class="swzxqewsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-up-right-bold"} {...others} />);
}

export default Component;
