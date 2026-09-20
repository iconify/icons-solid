import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mjgxucckf.css';
import '../../css/b/b47f0acpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="mjgxucckf"/><path class="b47f0acpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:magento-logo"} {...others} />);
}

export default Component;
