import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq_dl8bqj.css';
import '../../css/a/asuar4emf.css';
import '../../css/f/f8sf7yhpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq_dl8bqj"/><path class="asuar4emf"/><path class="f8sf7yhpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:breed"} {...others} />);
}

export default Component;
