import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9g84w8dg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7v0zjbzo.css';
import '../../css/a/aivyodbgw.css';
import '../../css/q/qcv5ypb5v.css';
import '../../css/t/tfb5in9hu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9g84w8dg secondary"/><g class="dt0cm9dhy primary"><path class="v7v0zjbzo"/><path class="aivyodbgw"/><path class="qcv5ypb5v"/><path class="tfb5in9hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-search-duo"} {...others} />);
}

export default Component;
