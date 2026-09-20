import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrh6l-b4x.css';
import '../../css/r/r98wmc10g.css';
import '../../css/y/ygpkzyb7g.css';
import '../../css/c/cb3t-_oid.css';
import '../../css/q/qh_4148js.css';
import '../../css/t/t60kkwbei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrh6l-b4x"/><path class="r98wmc10g"/><path class="ygpkzyb7g"/><path class="cb3t-_oid"/><path class="qh_4148js"/><path class="t60kkwbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wise"} {...others} />);
}

export default Component;
