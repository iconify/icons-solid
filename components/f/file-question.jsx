import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adm_kkbuq.css';
import '../../css/m/mus2fv8bq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="adm_kkbuq"/><path class="mus2fv8bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:file-question"} {...others} />);
}

export default Component;
