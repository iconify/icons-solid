import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn55krb2z.css';
import '../../css/r/r-xntnbat.css';
import '../../css/d/dfjq7mbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="jn55krb2z"/><rect class="r-xntnbat"/><path class="dfjq7mbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-vertical-justify-start-filled"} {...others} />);
}

export default Component;
