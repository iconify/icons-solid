import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-jhyvbes.css';
import '../../css/b/bk7etbbhv.css';
import '../../css/z/zxjlc_52g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-jhyvbes"/><path class="bk7etbbhv"/><path class="zxjlc_52g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cvr"} {...others} />);
}

export default Component;
