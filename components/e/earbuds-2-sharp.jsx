import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.syl_eknze {
  fill: currentColor;
  d: path("M16 23V12h7v6h-2v5zm-3.5-4q-1.7 0-2.9-1.15T8.4 15q0-1.675 1.2-2.837T12.5 11h2v8zM3 13V8H1V2h7v11zm6.5-4V1h2q1.675 0 2.888 1.163T15.6 5q0 1.7-1.212 2.85T11.5 9z");
}
</style><path class="syl_eknze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbuds-2-sharp"} {...others} />);
}

export default Component;
