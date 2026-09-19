import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/ztr1hloqh.css';
import '../../css/z/zz6iqrbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ztr1hloqh"/><path class="zz6iqrbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-remove-02"} {...others} />);
}

export default Component;
