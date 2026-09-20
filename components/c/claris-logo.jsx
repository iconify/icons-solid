import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o679ktz3a.css';
import '../../css/v/v9jno10kq.css';
import '../../css/k/ks4b0ybcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="o679ktz3a"/><path class="v9jno10kq"/><path class="ks4b0ybcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:claris-logo"} {...others} />);
}

export default Component;
