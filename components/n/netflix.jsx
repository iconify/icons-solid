import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py--2fjvj.css';
import '../../css/n/nthaozbsr.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="py--2fjvj"/><path class="nthaozbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:netflix"} {...others} />);
}

export default Component;
