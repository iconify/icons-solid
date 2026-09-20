import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tvqas5b5e {
  fill: var(--svg-color--ef2525, #EF2525);
  d: path("m22 20.485l-8.06-16.97l-5.225 10.606l-4.103.71l-.49.805H12l-8.133.607l-.655 1.212l8.182-.303l-8.485.909l-.303.909l8.182-.303l-8.485.909l-.303.909h7.09c1.189 0 1.983-1.412 2.231-2.121L13.94 12l2.097 4.243H13.8l1.49 4.242z");
}
</style><path class="tvqas5b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:assa"} {...others} />);
}

export default Component;
