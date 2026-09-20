import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdziokbyu.css';
import '../../css/k/kh0fq5pqy.css';
import '../../css/b/b93noccdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cdziokbyu"/><path class="kh0fq5pqy"/><path class="b93noccdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:pin-2-alt"} {...others} />);
}

export default Component;
