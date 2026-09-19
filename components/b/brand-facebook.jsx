import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy_2-dbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy_2-dbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:brand-facebook"} {...others} />);
}

export default Component;
