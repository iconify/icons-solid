import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vct-vqb1u {
  fill: currentColor;
  d: path("M17.962 5.309A.5.5 0 0 0 17.5 5h-6a.5.5 0 0 0 0 1h4.793L10.5 11.793L8.354 9.646a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708L8 10.707l2.146 2.147a.5.5 0 0 0 .708 0L17 6.707V11.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.038-.191");
}
</style><path class="vct-vqb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-trending-20-regular"} {...others} />);
}

export default Component;
