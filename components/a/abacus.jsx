import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/e/epr5qabal.css';
import '../../css/y/yoyw49efa.css';
import '../../css/n/nzc94_-fq.css';
import '../../css/s/s7-sjg3iu.css';
import '../../css/e/e3usibc3f.css';
import '../../css/a/ai0x8tsvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mie31z6an"/><path class="epr5qabal"/><path class="yoyw49efa"/><path class="nzc94_-fq"/><path class="s7-sjg3iu"/><path class="e3usibc3f"/><path class="ai0x8tsvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:abacus"} {...others} />);
}

export default Component;
