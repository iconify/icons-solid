import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy4tgoh5v.css';
import '../../css/z/zc97s3rju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yy4tgoh5v"/><path class="zc97s3rju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:credit-card-reader"} {...others} />);
}

export default Component;
