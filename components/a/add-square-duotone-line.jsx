import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/f-salgbqh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a141ddodm.css';
import '../../css/q/q52wvbblt.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGOtpyscno"><mask id="SVGHRWp4ThC" class="n1mjunbsu"><path class="f-salgbqh"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGHRWp4ThC)" class="a141ddodm"/><path class="q52wvbblt"/></g></mask></defs><path mask="url(#SVGOtpyscno)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:add-square-duotone-line"} {...others} />);
}

export default Component;
