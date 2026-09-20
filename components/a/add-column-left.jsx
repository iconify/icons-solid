import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhhnk2ezv {
  fill: currentColor;
  d: path("M14 21V3h8v18zM4 21v-4.1q.25.05.488.075T5 17q2.075 0 3.538-1.45T10 12T8.537 8.45T5 7q-.275 0-.513.025T4 7.1V3h8v18zm0-6v-2H2v-2h2V9h2v2h2v2H6v2z");
}
</style><path class="uhhnk2ezv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-column-left"} {...others} />);
}

export default Component;
