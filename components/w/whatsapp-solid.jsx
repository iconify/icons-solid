import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/s/s1brhjmbn.css';
import '../../css/j/j66rvjbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGlgxcXbAS" class="n1mjunbsu"><path clip-rule="evenodd" class="s1brhjmbn"/></mask><path clip-rule="evenodd" mask="url(#SVGlgxcXbAS)" class="j66rvjbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:whatsapp-solid"} {...others} />);
}

export default Component;
