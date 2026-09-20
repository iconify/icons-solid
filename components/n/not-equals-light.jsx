import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rxxn1rblh {
  fill: currentColor;
  d: path("M222 160a6 6 0 0 1-6 6H101.56l-49.12 54a6 6 0 1 1-8.88-8l41.79-46H40a6 6 0 0 1 0-12h56.25l47.28-52H40a6 6 0 0 1 0-12h114.44l49.12-54a6 6 0 1 1 8.88 8l-41.79 46H216a6 6 0 0 1 0 12h-56.25l-47.28 52H216a6 6 0 0 1 6 6");
}
</style><path class="rxxn1rblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:not-equals-light"} {...others} />);
}

export default Component;
