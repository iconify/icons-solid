import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfkejab2s.css';
import '../../css/c/c-nkdabpd.css';
import '../../css/i/imx8deb6i.css';
import '../../css/r/rf6rlnhzn.css';
import '../../css/d/dbdiu6u0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kfkejab2s"/><path class="c-nkdabpd"/><path class="imx8deb6i"/><path class="rf6rlnhzn"/><path class="dbdiu6u0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mistral"} {...others} />);
}

export default Component;
