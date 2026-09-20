import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xdo8f1b5j {
  fill: currentColor;
  d: path("M16 18q-2.25 0-3.912-1.425T10.075 13H2v-2h8.075q.35-2.15 2.013-3.575T16 6q2.5 0 4.25 1.75T22 12t-1.75 4.25T16 18");
}
</style><path class="xdo8f1b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-circle-sharp"} {...others} />);
}

export default Component;
