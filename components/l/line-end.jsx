import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vthtb6bda {
  fill: currentColor;
  d: path("M19.5 14.5q-.775 0-1.4-.425T17.2 13H2v-2h15.2q.275-.65.9-1.075t1.4-.425q1.05 0 1.775.725T22 12t-.725 1.775t-1.775.725");
}
</style><path class="vthtb6bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end"} {...others} />);
}

export default Component;
