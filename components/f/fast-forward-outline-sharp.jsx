import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q2gkpt2sy {
  fill: currentColor;
  d: path("M4.096 16.616V7.385L11.02 12zm8.885 0V7.385L19.904 12zM5.096 14.75L9.227 12l-4.13-2.75zm8.885 0L18.11 12l-4.13-2.75z");
}
</style><path class="q2gkpt2sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:fast-forward-outline-sharp"} {...others} />);
}

export default Component;
