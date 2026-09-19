import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv2j7cb0k {
  fill: currentColor;
  d: path("m12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88l4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51l-2.35-5.54a.498.498 0 0 0-.92 0L9.19 8.63l-6.01.51a.5.5 0 0 0-.28.88l4.56 3.95l-1.37 5.88c-.1.43.37.77.75.54z");
}
</style><path class="mv2j7cb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-grade"} {...others} />);
}

export default Component;
