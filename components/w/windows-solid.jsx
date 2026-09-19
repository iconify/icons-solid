import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/a9x7u0jlb.css';
import '../../css/d/deeciebvd.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVG8ATWfIoq" class="n1mjunbsu"><path class="a9x7u0jlb"/></mask><path mask="url(#SVG8ATWfIoq)" class="deeciebvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:windows-solid"} {...others} />);
}

export default Component;
