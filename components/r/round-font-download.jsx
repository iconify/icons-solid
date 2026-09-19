import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkdm898bq {
  fill: currentColor;
  d: path("M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4.29 15.88l-.9-2.38H9.17l-.89 2.37a.968.968 0 1 1-1.81-.69l4.25-10.81c.22-.53.72-.87 1.28-.87s1.06.34 1.27.87l4.25 10.81a.968.968 0 0 1-.9 1.32c-.4 0-.76-.25-.91-.62");
}
</style><path class="rkdm898bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-font-download"} {...others} />);
}

export default Component;
