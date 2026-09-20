import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt13r4bix.css';
import '../../css/g/gw7mb_bdb.css';
import '../../css/b/bnkx5bbkr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lt13r4bix"/><path class="gw7mb_bdb"/><path class="bnkx5bbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:saxophone"} {...others} />);
}

export default Component;
