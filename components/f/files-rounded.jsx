import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.woqtu8brf {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V14.23h7.616q.666 0 1.14-.475t.475-1.14V5h7.154q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475zM3 13.942V8.616q0-.667.475-1.141T4.615 7h5.327zm2.114-.711l6.117-6.117v5.502q0 .269-.173.442t-.442.173z");
}
</style><path class="woqtu8brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:files-rounded"} {...others} />);
}

export default Component;
