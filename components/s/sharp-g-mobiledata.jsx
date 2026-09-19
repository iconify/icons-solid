import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asosj7d7h {
  fill: currentColor;
  d: path("M12 11v2h2v2H9V9h7V7H7v10h9v-6z");
}
</style><path class="asosj7d7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-g-mobiledata"} {...others} />);
}

export default Component;
