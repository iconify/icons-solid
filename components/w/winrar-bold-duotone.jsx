import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9i6b7boc.css';
import '../../css/r/rptuzg1jl.css';
import '../../css/a/aazo5tbzy.css';
import '../../css/n/ni915cc4l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9i6b7boc"/><path class="rptuzg1jl"/><path class="aazo5tbzy"/><path clip-rule="evenodd" class="ni915cc4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:winrar-bold-duotone"} {...others} />);
}

export default Component;
