import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exi9k5bqt.css';
import '../../css/u/upokvvtxt.css';
import '../../css/r/rvcxalj0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exi9k5bqt"/><path clip-rule="evenodd" class="upokvvtxt"/><path clip-rule="evenodd" class="rvcxalj0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dropper4"} {...others} />);
}

export default Component;
