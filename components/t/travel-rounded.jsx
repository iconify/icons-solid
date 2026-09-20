import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.we4jdj13e {
  fill: currentColor;
  d: path("m10.775 10.4l-6.25-2.7q-.6-.275-.737-.888t.337-1.087l.4-.4q.2-.2.488-.3t.587-.05l9 1.6l3.1-3.125q.575-.575 1.413-.575t1.412.575t.575 1.413t-.575 1.412l-3.1 3.125L19 18.375q.05.3-.038.6t-.287.5l-.4.375q-.475.475-1.1.35t-.9-.725l-2.675-6.25l-2.55 2.525l.55 3.1q.05.25-.025.488t-.25.412l-.425.425q-.35.35-.862.275t-.763-.525L7.45 16.55l-3.375-1.825q-.45-.25-.525-.762t.275-.863l.425-.425q.175-.175.413-.25t.487-.025l3.075.525z");
}
</style><path class="we4jdj13e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:travel-rounded"} {...others} />);
}

export default Component;
