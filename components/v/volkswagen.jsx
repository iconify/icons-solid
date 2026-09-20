import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grs06_b9k.css';
import '../../css/z/zvpwxgbul.css';
import '../../css/a/aq8pp-buc.css';
import '../../css/b/b925a0-jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grs06_b9k"/><path class="zvpwxgbul"/><path class="aq8pp-buc"/><path class="b925a0-jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:volkswagen"} {...others} />);
}

export default Component;
