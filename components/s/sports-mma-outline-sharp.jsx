import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0swguk8p {
  fill: currentColor;
  d: path("M8 19.616v-3.232h8.077v3.231zM7.039 15l-.808-4.05V3.846h10v2.77h1.538v4.296L16.923 15zm.842-1h8.238l.65-3.323v-.908h-1.538V4.846h-8v5.87zM9 9.77h4.462V8H9zm3-.347");
}
</style><path class="l0swguk8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sports-mma-outline-sharp"} {...others} />);
}

export default Component;
