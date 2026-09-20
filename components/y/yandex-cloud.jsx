import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfl1ecc1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sfl1ecc1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yandex-cloud"} {...others} />);
}

export default Component;
