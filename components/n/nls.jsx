import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixd1fcbsk {
  fill: var(--svg-color--ff562d, #ff562d);
  fill-rule: evenodd;
  d: path("M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M8.974 7.5A1.474 1.474 0 0 0 7.5 8.974v6.052A1.474 1.474 0 0 0 8.974 16.5h6.052a1.474 1.474 0 0 0 1.474-1.474V8.974A1.474 1.474 0 0 0 15.026 7.5z");
}
</style><path clip-rule="evenodd" class="ixd1fcbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:nls"} {...others} />);
}

export default Component;
