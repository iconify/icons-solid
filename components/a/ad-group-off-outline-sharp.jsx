import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xb6fzrfse {
  fill: currentColor;
  d: path("m19.642 16.817l-.855-.855h.713V6H8.825L6.683 3.858V3H20.5v13.817zm.781 5.022L15.585 17H6.5V7.916L2.162 3.577l.707-.708l18.262 18.262zM7.5 16h7.085L7.5 8.916zm-4 4V6.616h1V19h12.385v1zm10.014-9.311");
}
</style><path class="xb6fzrfse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ad-group-off-outline-sharp"} {...others} />);
}

export default Component;
