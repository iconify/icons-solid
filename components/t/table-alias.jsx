import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7zrtccmu.css';
import '../../css/z/zd5_1s5gb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o7zrtccmu"/><path class="zd5_1s5gb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:table-alias"} {...others} />);
}

export default Component;
