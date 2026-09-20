import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcxdw0blf.css';
import '../../css/r/rsc1xgbvj.css';
import '../../css/n/nno8gebdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="rsc1xgbvj"/><path class="nno8gebdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:acq"} {...others} />);
}

export default Component;
