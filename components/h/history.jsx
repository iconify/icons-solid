import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n5jykqb5j.css';
import '../../css/v/v427q6u5f.css';
import '../../css/y/y27fewbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n5jykqb5j"/><path class="v427q6u5f"/><path class="y27fewbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:history"} {...others} />);
}

export default Component;
