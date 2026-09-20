import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_chlwb2q.css';
import '../../css/s/shfn86b7f.css';
import '../../css/n/n7a0i1lzr.css';
import '../../css/l/lm6u5ojdi.css';
import '../../css/y/yr4reubxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_chlwb2q"/><path class="shfn86b7f"/><path class="n7a0i1lzr"/><path class="lm6u5ojdi"/><path clip-rule="evenodd" class="yr4reubxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kint"} {...others} />);
}

export default Component;
