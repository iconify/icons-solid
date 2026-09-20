import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hug9dpb9x.css';
import '../../css/z/zz_txovbp.css';
import '../../css/a/alnpkf-oi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hug9dpb9x"/><path class="zz_txovbp"/><path class="alnpkf-oi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:beauty-body-care-snail"} {...others} />);
}

export default Component;
