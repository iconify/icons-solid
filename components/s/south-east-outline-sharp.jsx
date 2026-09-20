import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_9-n3bwy {
  fill: currentColor;
  d: path("M9 18v-1h7.292L5 5.708L5.708 5L17 16.292V9h1v9z");
}
</style><path class="q_9-n3bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:south-east-outline-sharp"} {...others} />);
}

export default Component;
