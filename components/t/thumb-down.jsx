import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pst2j3mwl {
  fill: currentColor;
  d: path("M6.539 4.808h9.807v11L10.077 22l-.442-.442q-.137-.137-.23-.35t-.093-.393v-.157l1.023-4.85h-6.72q-.626 0-1.12-.495T2 14.194v-1.231q0-.137.028-.298q.028-.162.084-.298l2.73-6.474q.206-.461.693-.773q.486-.311 1.003-.311m10.808 11v-11H21v11z");
}
</style><path class="pst2j3mwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumb-down"} {...others} />);
}

export default Component;
