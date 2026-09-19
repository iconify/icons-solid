import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx9qdackm.css';
import '../../css/e/eai2o3bto.css';
import '../../css/i/i2tovxbyl.css';
import '../../css/n/na412xbqh.css';
import '../../css/t/t210tybnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx9qdackm"/><path class="eai2o3bto"/><path class="i2tovxbyl"/><path class="na412xbqh"/><path class="t210tybnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:data-qna"} {...others} />);
}

export default Component;
